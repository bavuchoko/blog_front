import React, {useEffect, useState} from 'react';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import SelectBox from "../../../components/utils/SelectBox";
import {useNavigate} from "react-router-dom";
import {getCategoryList} from "../../../api/category/CateogryService";
import axios from "axios";
import {noAuh} from "../../../api/instance/Instance";


function Create(props) {

    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const editorConfiguration = {
        extraPlugins: [uploadPlugin],
        placeholder:"내용을 입력하세요",
        toolbar: {
            items: [
                "undo",
                "redo",
                "|",
                "heading",
                "|",
                "fontfamily",
                "fontsize",
                "|",
                "alignment",
                "|",
                "bold",
                "italic",
                "strikethrough",
                "underline",
                "|",
                "link",
                "|",
                "outdent",
                "indent",
                "|",
                "code",
                "codeBlock",
                "|",
                "insertTable",
                "|",
                "imageUpload",
                "blockQuote",
            ],
            shouldNotGroupWhenFull: true
        }
    };
    const navigate = useNavigate();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState('');
    const [htmlBody, setHtmlbody] = useState('');
    const categories = JSON.parse(localStorage.getItem('category'))
    const tagHandler = (e) => {
        setTag(e.target.value);
    };

    const customUploadAdapter = (loader) => {
        return {
            upload() {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    loader.file.then((file) => {
                        formData.append("file", file);

                        noAuh.post(domain + "/file", formData)
                            .then((res) => {
                                resolve({
                                    default: res.data.data.uri,
                                });
                            })
                            .catch((err) => reject(err));
                    });
                });
            },
        };
    };

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        };
    }
    const tagEnter = (e) => {
        if (e.key === 'Enter') {
            if (tag.trim() !== '') {
                if (!tags.includes(tag)) {
                    setTags([...tags, tag]);
                    setTag('');
                } else {
                }
            }
        }
    };

    const removeTag = (index) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    };

    const titleChange =(e) =>{
        setTitle(e.target.value)
    }

    const goList =() =>{
        navigate('/content')
    }


    const onSubmit = () => {
        let body =''
        body = htmlBody.replace(/<br\/>/ig, "\n");
        body = body.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
        body = body.replace(/(<([^>]+)>)/gi, "");
        body = body.replace(/&nbsp;/gi,"");

        const content = {
            title: title,
            body: body,
            bodyHtml: htmlBody,
            category:category,
            tags:tags
        }
        console.log(content)
    }


    return (
        <>
            <div className="create-header fixed"></div>
            <div className="content-containers">
                <div className="content-create-gategory">
                <SelectBox options={categories} setSelectValue={setCategory}/>
                </div>
                <input type={"text"}
                       onChange={titleChange}
                       value={title}
                       className="content-title" placeholder={'제목을 입력하세요'}/>
                <CKEditor
                    editor={Editor}
                    config={editorConfiguration}
                    onChange={(event, editor) => {
                        setHtmlbody(editor.getData());
                    }}
                />

                <div className="tag-div">
                    <span className="inp_tag">
                        {tags.map((tag, index) => (
                            <span key={index}>
                                <span className="tag">
                                 #{tag}
                                </span>
                                <button className="remove-tag ml-[1px] mr-[10px] " onClick={() => removeTag(index)}>
                                 X
                                </button>
                            </span>
                        ))}
                            <span>#</span>
                        <div style={{display: "inline-block"}}>
                            <input type="text" title="태그" name="tagText" id="tagText" placeholder="태그입력" className="tf_g" value={tag} onChange={tagHandler} onKeyUp={tagEnter} style={{boxSizing: "content-box", width: "54px"}}/>
                            <div style={{position: "absolute",top: "0px",left: "0px",visibility: "hidden",height: "0px",overflow: "scroll", whiteSpace: "pre",fontSize: "13px",fontWeight: "400",fontStyle: "normal",letterSpacing: "normal",textTransform: "none"}}>
                            </div>
                            <div style={{position: "absolute", top: "0px", left: "0px", visibility: "hidden", height: "0px", overflow: "scroll", whiteSpace: "pre", fontSize: "13px", fontWeight: "400", fontStyle:"normal", letterSpacing: "normal", textTransform: "none"}}>태그입력
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div className="create-footer">


                <div className="wrap_btn">
                    <button id="publish-layer-btn" className="btn-content-cancel" onClick={goList} >취소</button>
                    <button id="publish-layer-btn" className="btn-content-submit" onClick={onSubmit}>완료</button>
                </div>
            </div>
        </>
    );
}

export default Create;

import React, {useEffect, useState} from 'react';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import SelectBox from "../../../components/utils/SelectBox";
import {useNavigate} from "react-router-dom";
import {noAuh} from "../../../api/instance/Instance";


function Create(props) {

    //실제로 남아있는 이미지 : 이미지를 추가했다가 삭제하거나 수정함으로 인해서 컨텐츠를 마지막으로 등록버튼 누르기 전에 현재 남아있는 img 태그속 이미지들
    const [realImageArray, setRealImageArray] = useState([]);

    // 이미지 업로드를 통해 서버에 등록된 이미지. 컨트츠에 현재 남아있는 이미지와 일치 하지 않을 수 있다.
    // imgArray는  최소한 realImageArray 보다 같거나 많다. 즉 등록 이후 컨텐츠에 남아있지 않는 이미지들은 삭제해주어야 한다.
    // realImageArray 중 첫번째 이미지로 해당 컨텐츠의 썸네일을 지정해준다.
    const imgArray=[]
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
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
    };
    const navigate = useNavigate();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState('');
    const [htmlBody, setHtmlbody] = useState('');
    const [body, setBody] = useState('');
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

                        noAuh.post(domain + "/api/file", formData)
                            .then((res) => {

                                resolve({
                                    default: domain + "/images" + res.data.uri,
                                });
                                imgArray.push(res.data.uri.substring(res.data.uri.lastIndexOf('/')+1))
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
                        let aa=editor.getData()
                        setBody(editor.editing.view.domRoots.get("main").innerText)
                        setHtmlbody(editor.getData());
                        const srcList =Array.from( new DOMParser().parseFromString( editor.getData(), 'text/html' )
                            .querySelectorAll( 'img' ) )
                            .map( img => {
                                const src =  img.getAttribute( 'src' )
                                if(src){
                                    const extractedPart = src.substring(src.lastIndexOf('/') + 1);
                                    return extractedPart;
                                }
                            } )
                        setRealImageArray(srcList);
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

import React, {useState} from 'react';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import SelectBox from "../../../components/utils/SelectBox";


const editorConfiguration = {
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
function Create(props) {

    const [tag, setTag]=useState("");
    const tagHandler = (e) => {
        setTag(e.target.value);
    }
    const tagEnter = (e) => {

        setTag(e.target.value);
    }
    return (
        <>
            <div className="create-header fixed"></div>
            <div className="create-containers">
                <div className="content-create-gategory">
                <SelectBox />
                </div>
                <input type={"text"} className="content-title" placeholder={'제목을 입력하세요'}/>
                <CKEditor
                    editor={Editor}
                    config={editorConfiguration}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                    }}
                />

                <div className="tag-div">
                    <span className="inp_tag">
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
                    <button id="publish-layer-btn" className="btn-content-submit">완료</button>
                </div>
            </div>
        </>
    );
}

export default Create;

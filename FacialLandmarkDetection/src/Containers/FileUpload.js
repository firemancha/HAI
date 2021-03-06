import React from "react";
import styled from "styled-components";

import Container from "Components/Container";
import pic from './faceSample.png';

import { observer, inject } from "mobx-react";

@inject("ManageFile")
@observer
class FileUploadContainer extends React.Component {
  state = {
    file: "",
    previewURL: "",
  };
  onChangeFile = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    this.props.ManageFile.fileName = e.target.files[0].name;
    reader.onloadend = () => {
      this.props.ManageFile.imageUrl = reader.result;
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };
  // onChangeFile = (e) => {
  //   const { ManageFile } = this.props;

  //   let fileNameAvailable = ["png", "jpg", "jpeg"];
  //   let fileName;
  //   if (e.currentTarget.files[0]) {
  //     if (
  //       !fileNameAvailable.includes(
  //         e.currentTarget.files[0].name.split(".")[e.currentTarget.files.length]
  //       )
  //     ) {
  //       return alert("파일 확장자명 (png, jpg, jpeg만 가능) 을 확인해주세요.");
  //     }
  //     fileName = e.currentTarget.files[0].name;
  //     ManageFile.imageFile = e.currentTarget.files[0];
  //     console.log(ManageFile.imageFile)
  //     // document.getElementById('FileInput').select();
  //     const temp=document.getElementById('FileInput')
  //     temp.select();
  //     // console.log(document.getSelection)
  //     // console.log(temp)
  //     console.log(ManageFile.imageFile.name);

  //     this.setState({f:3})
  //   }
  // };
  render() {
    return (
      <>
      {/* // <Container> */}
        <Font20>얼굴 정면이 잘 보이는 사진을 업로드 해주세요.</Font20>
        <Font20>예시</Font20>
        <ExampleImg src={pic} />

        <FileSelect
          onClick={() => document.getElementById("FileInput").click()}
        >
          <Font16>업로드</Font16>
          {/* <img src={fileImage} /> */}
          <input
            id="FileInput"
            type="file"
            style={{
              display: "none",
            }}
            onChange={(e) => this.onChangeFile(e)}
          />
        </FileSelect>
        {this.state.previewURL && this.props.ManageFile.pageIndex != 4 && (
          <UploadImg src={this.state.previewURL} />          
        )}

        {/* {ManageFile.imageFile && <img src={require('./'+ManageFile.imageFile.name)}/>} */}
        {/* <img src={require('./face_540.jpg')}/> */}
      {/* // </Container> */}
      </>
    );
  }
}

export default FileUploadContainer;

const ExampleImg = styled.img`
  @media screen and (min-width: 0px) and (max-width: 767.98px) {
    width: 50%;
  };
  
  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    width: 45%;
  };
  @media screen and (min-width: 1280px) {
    width: 40%;
  };
  height: auto;
  margin-top: 12px;
  margin-bottom: 18px;
`

const UploadImg = styled.img`
  @media screen and (min-width: 0px) and (max-width: 700px) {
    width: 240px;
  };
  
  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    width: 360px;
  };
  @media screen and (min-width: 1280px) {
    width: 480px;
  };
  height: auto;
  margin-top: 18px;
  margin-bottom: 18px;
`

const FileSelect = styled.div`
  border: none;
  width: 70%;
  height: 46px;
  ${'' /* width: 50%; */}
  ${'' /* height: 20%; */}
  background-color: #00cfbb;
  object-fit: contain;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  ${'' /* margin-bottom: 20px; */}
  justify-content: center;
  outline: 0;
  border: ${(props) => (props.active ? "solid 2px #0933b3" : "none")};
  &:hover {
    cursor: pointer;
    border: solid 2px #0933b3;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  }
  > input {
    width: 100%;
    height: 100%;
  }
  > img {
    margin-left: 10px;
  }
  margin-bottom: 12px;
`;
const Font16 = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
const Font20 = styled.div`
  color: white;
  ${'' /* font-size: 30px; */}
  @media screen and (min-width: 0px) and (max-width: 767.98px) {
    font-size: 1rem;
  };
  
  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    font-size: 1.3rem;
  };
  @media screen and (min-width: 1280px) {
    font-size: 1.5rem;
  };
  font-weight: bold;
  ${'' /* margin-top: 5px; */}
  ${'' /* margin-bottom: 5px; */}
  cursor: default;
`;
const UploadButton = styled.button`
  width: 300px;
`;

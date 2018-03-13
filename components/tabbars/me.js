import React, { Component } from 'react';
// 第1步：
import { Text,View, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'
var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,//照片的质量
    allowsEditing: true,//允许被编辑
    noData: false,//拍照时候不附带日期
    storageOptions: {//存储属性
        skipBackup: true,//在ios会自动把图片存储到云端，为true，不会存储到云端
        path: 'images'
    }
}

export default class Me extends Component {
    // 第2步：
    constructor(props) {
        super(props);
        this.state = {
            imgURL: ''//将来拍摄的照片路径会存到这里
        }
    }


    render() {
        return (
            <View style={{alignItems:"center",paddingTop:70}}>
                <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200,borderRadius:100 }}></Image>
                <Button title="拍照" onPress={this.cameraAction}></Button>
            </View>
        )

    }
    // 第4步：
    cameraAction = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('response' + response);
            if (response.didCancel) {//点击了取消按钮，此时用户没有拍照
                return
            }
            //用户已经拍摄了一张照片
            this.setState({
                imgURL: response.uri
            });
        })
    }
}

import React, {Component} from 'react';
import {View, Text, StyleSheet,ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'

export default class markKeyWords extends Component {
    static propTypes={
        searchStr:PropTypes.string,
        keyArr:PropTypes.array,
        markBoxStyle:ViewPropTypes.style,
        markItemStyle:ViewPropTypes.style,
        markActiveStyle:ViewPropTypes.style,
    };
    static defaultProps={
        markBoxStyle:{flexDirection: 'row'},
        markActiveStyle:{color:'red'},
    };
    /**
     * 标记关键字
     * @returns {Array<*>}
     */
    markKeyWords() {
        const {searchStr,keyArr,markItemStyle,markActiveStyle}=this.props;
        if(!keyArr || keyArr.length ===0){
            return <Text>{searchStr}</Text>
        }
        /**
         * 获取正则字符串
         * @type {T|string}
         */
        const regStr = keyArr.reduce((str, item, index) => {
            if (index === (keyArr.length - 1)) {
                return str += `(${item})`
            } else {
                return str += `(${item})|`
            }

        }, '');
        /**
         * 关键字正则
         * @type {RegExp}
         */
        const reg = new RegExp(regStr);
        /**
         * 用关键字分割后的字符串数组
         * @type {Array<string>}
         */
        const strArr = searchStr.split(reg);
        /**
         * 根据数组标记关键字
         */
        return strArr.map((item,index) => {
            if (item) {
                if (keyArr.includes(item)) {
                    return <Text style={markActiveStyle} key={`markKeyWords${index}`}>{item}</Text>
                } else {
                    return <Text style={markItemStyle ? markItemStyle :{} } key={`markKeyWords${index}`}>{item}</Text>
                }
            } else {
                return null
            }
        })



    }
    render(){
        const {markItemStyle}=this.props;
        return <View style={markItemStyle}>
            {this.markKeyWords()}
    </View>
    }
}

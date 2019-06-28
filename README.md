react-native 巧用正则 和split（） 在Text组件标红显示关键字
-------
说明
-------
有人问在群里问到，我搜索的关键字怎么高亮显示在我搜索的那个字符里面，当时第一反应很简单。
确实在html页面是很简单一个replace( )方法就搞定了，但是在react-native中就不行， 因为字符串文本必须放在 Text组件中。
我想大概两个方法：
>>1，就通过html 的形势，replace( )替换，然后通过vebView以字符串的形式噻进去，这个方式没啥子说的。
>>2，还是通过Text组件来放字符，只不过要处理分割出关键字和非关键字然后给他们装在不同的Text组件中，现在我就实现 这一种。

集成方式
--------

npm i react-native-markkeyword

使用
-------


```javascript
import markKeyWord from 'react-native-markkeyword';

<markKeyWord
    markBoxStyle={{flexDirection: 'row'}}//文本父级View样式非必填
    markActiveStyle={{color:'red'}}//标记key的颜色
    markItemStyle={{color:'#999'}} //未标记的文本的颜色
    //需要被标记的字符串
    searchStr={'我搜索的关键字怎么高亮显示在我搜索的那个字符里面'}
    //关键字数组，高亮显示的文字数组
    keyArr={['我'，'关键字'，'字符']}
    >
```


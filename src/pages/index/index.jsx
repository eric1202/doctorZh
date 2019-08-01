import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button} from '@tarojs/components'
import './index.styl'
import { clearInterval } from 'timers';

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = { 
      date: new Date() ,
      posts: [
        {id: 1, title: 'Hello World', content: 'Welcome to learning Taro!'},
        {id: 2, title: 'Installation', content: 'You can install Taro from npm.'}
      ]
    }
  }

  config = {
    navigationBarTitleText: '首页',
  }

  onShareAppMessage(res){
    return{
      title:'标题',
      path:'/page/articles'
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.timerId= setInterval(() => {
      this.setState({
        date:new Date()
      })
    }, 100);
   }

  componentWillUnmount () {
    clearInterval(this.timerId)
   }

  componentDidShow () { }

  componentDidHide () { }

  clicking = (e) =>{
    e.stopPropagation()
    console.log(this.state)
  }

  render () {
    const { posts } = this.state


    const numbers = posts.map((post)=>{
      return <p><Text className='li'>i am {post.title}: {post.content}~</Text></p>
    })
    
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <h2>现在的时间是 {this.state.date.toLocaleTimeString()}.</h2>
        {numbers}
        <Button onClick={this.clicking}><Text className='text'>click me</Text></Button>
      </View>
    )
  }
}

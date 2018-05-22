import {MqApiDecorators} from "./decorators/mq.api.decorators";


export default MqApiDecorators;


//
// import {Connection} from "amqplib";
// import MqConsumer = MqApiDecorators.MqConsumer;
// import MqProducer = MqApiDecorators.MqProducer;
// import EnableMqApi = MqApiDecorators.EnableMqApi;
// export class Service {
//     constructor(public bar: string){
//         console.log('INIT: ', bar);
//     }
//     @MqConsumer({name:'fetch', gateway:'clientKey'})
//     call1(req: string){
//         console.log('bar == ',this.bar);
//         return "MQ 2-1: " + req;
//     }
//     @MqProducer({name:'fetch', gateway:'clintKey'})
//     call2(req: string){
//         console.log('bar == ',this.bar);
//         return "MQ 2-2: " + req;
//     }
//     foo(){
//         console.log('foo')
//         return 'foo';
//     }
// }
// @EnableMqApi({
//     root: 'root',
//     clients:['telegram'],
//     components:[Service, Number]
// })
// class Test {
//     constructor(connection: Connection){}
// }
//
// console.log('**********************************************************');
// console.log('Test: ', Test);
// const test = new Test(({} as Connection));
// console.log('test: ', test);
//
// const service = new Service('serviceBar')
// service.call1('test call1')
// service.call2('test call2')

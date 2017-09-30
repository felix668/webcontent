const routers = [{
	path:'/champion',
	name:'champion',
	component (resolve) {
       require(['./components/Champion.vue'], resolve);
    }
},{
	path:'/live',
	name:'live',
	component (resolve) {
       require(['./components/Live.vue'], resolve);
    }
}];
export default routers;
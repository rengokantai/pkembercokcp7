import Ember from 'ember';

export default Ember.Controller.extend({
   info:{},
   actions:{
       newText(){
           var inf = this.get('info');
           let newBook = this.store.createRecord('book',{
               title:inf.title,
               author:inf.author,
               year:new Date(inf.year)
           })
           newBook.save().then(()=>{
               this.transitionTo('application');
               this.set('info',{});
           },()=>{
               console.log('failed');
           })
           
       },
       cancel(){
           return true;
       }
   }
   
});

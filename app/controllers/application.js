import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        delete(book){
            //this.store.findRecord('book',params.book_id);
            book.deleteRecord();
            console.log(book.get('isDeleted'));
            book.save();
        }
    }
});

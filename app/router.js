import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books',{'path':'/books/:book_id'});
  this.route('new');
});

export default Router;

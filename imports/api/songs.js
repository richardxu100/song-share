import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Songs = new Mongo.Collection('songs');

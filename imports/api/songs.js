import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Songs = new Mongo.Collection('songs');

if (Meteor.isServer) {
  Meteor.publish('songs', () => {
    return Songs.find({
      // $or: [
      //   { isPrivate: { $ne: true }},
      //   { submitter: this.userId }
      // ]
    })
  });


  Meteor.publish('usersData', () => {
    return Meteor.users.find();
    console.log(Meteor.users.find().fetch());
  });
}

Meteor.methods({
  'songs.insert'(artist, description, url,
                 submitter, isPrivate, createdAt) {
    check(artist, String);
    check(description, String);
    check(url, String);
    check(submitter, String);
    check(isPrivate, Boolean);
    check(createdAt, Date);

    // check if the user is logged in
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Songs.insert({ artist, description, url, submitter, isPrivate, createdAt });
  },
  'songs.delete'(song_id) {
    check(song_id, String);
    const song = Songs.findOne(song_id);

    // check if the current user is the submitter
    const submitter = song.submitter;
    if (submitter != this.userId) {
      throw new Meteor.Error('not-authorized to delete');
    }

    Songs.remove(song_id);
  },
  'songs.togglePrivate'(song_id, isPrivate) { // set a checked value
    check(song_id, String);
    check(isPrivate, Boolean);

    // check if the current user is the submitter
    const song = Songs.findOne(song_id);
    const submitter = song.submitter;
    if (submitter != this.userId) {
      throw new Meteor.Error('not-authorized to delete');
    }

    Songs.update({_id: song_id}, {$set: {isPrivate}});
  }
});

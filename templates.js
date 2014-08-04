if (Meteor.isClient) {

    Template.index.events({

        'click .login': function () {
            Session.set('currentUser', { name: 'Chuck Norris' });
        }

    });

    Template.profile.events({

        'click .logout': function () {
            Session.set('currentUser', null);
        }

    });

}
function loggedInFilter() {
    var loggedIn = !!Session.get('currentUser');

    if (!loggedIn) {
        return this.redirect('index', null, { replaceState: true });
    }
}

UI.registerHelper('currentUser', function () {
    return Session.get('currentUser');
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {

    this.route('index', {
        path: '/'
    });

    this.route('profile', {
        path: '/profile/:section?',
        onBeforeAction: [
            loggedInFilter,
            function () {
                var section = this.params.section;

                if (section !== 'settings') {
                    this.redirect('profile', { section: 'settings' }, { replaceState: true });
                }
            }
        ],
        data: function () {
            return {
                section: this.params.section
            };
        }
    });

});
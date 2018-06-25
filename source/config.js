module.exports = function (bot) {
    var welcomeFmt = 'Welcome to the Agama and Tantra chat!' +
        'If you have a question, just post it, and if anyone\'s free and interested they\'ll help. ' +
        'If you want to report an abusive user or a problem in this room, ping Rakesh Joshi, TheDestroyer and TheLittleNaruto.';

    var config = Object.merge(
        {
            pattern: 'baby',
            welcomeMessage: welcomeFmt.supplant({}),

            // these must be set for the weather
            // command and backup command respectivly.
            // I've removed the sample keys so I can easily
            // change them with the bot loader script.

            //weatherKey: '',
            //githubToken: ''
        },
        bot.memory.get('config', {})
    );

    bot.memory.set('config', config);
    bot.memory.save('config');

    return config;
};

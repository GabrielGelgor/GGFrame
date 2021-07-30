import { User } from './models/User';

const user = new User({ name: 'GabeG', age: 23  });

user.events.on('change', () => {
    console.log('CHANGE');
});

user.events.trigger('change');
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotEnv';

DotEnv.config({ path: '.env.test'});


Enzyme.configure({
    adapter: new Adapter()
});
import { User } from './User';

const user = new User('tanaka', 'taro', 44);

const contentsElement = document.getElementById('contents');
if(!!contentsElement)
{
    contentsElement.innerText = `${user.familyName} ${user.firstName}`;
}
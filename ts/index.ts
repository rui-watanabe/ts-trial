import { User } from './User';
import { v4 as uuidv4 } from "uuid";

const user = new User('tanaka', 'taro', 44);

const contentsElement = document.getElementById('contents');
if(!!contentsElement)
{
    contentsElement.innerText = `${user.familyName} ${user.firstName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;

saibanButton.onclick = (e) => {
    uuidSpan.innerText = uuidv4();
}
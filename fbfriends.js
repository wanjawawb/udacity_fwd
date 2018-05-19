/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "WWB",
    friends: 5,
    messages: ["Good job","Well done","Congrats"],
    postMessage: function postMessage(message){
            facebookProfile.messages.push(message);
        },
    deleteMessage: function deleteMessage(index){
            facebookProfile.messages.splice(index, 1);
        },
    addFriend: function addFriend(){
            facebookProfile.friends++;
        },
    removeFriend: function removeFriend(){
      facebookProfile.friends--;
        }
};
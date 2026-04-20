/* Question 4: Objects & Methods (30 Marks)

Create a JavaScript object named post representing a social media post with
these properties: username, caption, likes, comments (array data type).

Add a method inside the object named addLike() that increases the like count by 1.
Then, use object destructuring to extract and print the username and caption. */

let post = {
    username: "Kago Kola",
    caption: "I love JavaScript!",
    likes: 100,
    comments: ["Great!", "Awesome K!"],

    addLike() {
        this.likes += 1;
    }
};

post.addLike();

const { username, caption } = post;

console.log("Username:", username);
console.log("Caption:", caption);
console.log("Likes:", post.likes);

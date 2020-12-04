function reverse(str) {
    str = str.split("_");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].slice(0, 4).toUpperCase() + str[i].slice(1, str[i].length);
    }

    return str.join("");
}

console.log(reverse("user_name"));

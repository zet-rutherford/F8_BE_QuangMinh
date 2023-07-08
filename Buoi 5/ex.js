var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut quaerat harum sed labore pariatur, fugiat vitae odit placeat debitis at non amet adipisci. Ipsam nulla obcaecati necessitatibus consectetur quibusdam magnam nam! Possimus quasi ex beatae. Eos dolor alias reiciendis ullam illo, explicabo in similique adipisci temporibus aliquam totam blanditiis dignissimos saepe quasi nemo voluptas nisi earum, libero odit rem fugiat accusamus! Quod provident nobis ipsam odio et fugit delectus reprehenderit repellendus harum sint, architecto hic officiis voluptate. Reiciendis blanditiis molestiae exercitationem nemo, illum minus laudantium reprehenderit esse ipsum, obcaecati aspernatur alias delectus facere, eius omnis illo corporis natus recusandae?`;

var word = content.split(" ");
var word_2 = content.split(" ");
var i = 0;

var hightlightNextWord = function () {
  setInterval(function () {
    word[i] = `<span>${word[i]}</span>`;
    content = word.join(" ");
    document.getElementById("text").innerHTML = content;
    word = content.split(" ");
    word[i] = word_2[i];
    i++;

    if (i >= word.length) {
      i = 0;
    }
  }, 1000);
};

hightlightNextWord();

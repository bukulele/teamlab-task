class List {
  constructor(arr) {
    if (arr.length > 0) {
      this.listArr = arr;
    } else {
      throw new Error("The list for selector is empty");
    }
    this.isInitialized = false;
  }

  init = (elem) => {
    if (!this.isInitialized) {
      this.isInitialized = true;

      this.selectElement = document.createElement("div");
      this.selectElement.className = "selectElement";

      this.selectedItem = document.createElement("p");
      this.selectedItem.innerHTML = "";

      this.defaultOption = document.createElement("div");
      this.defaultOption.className = "defaultOption";
      this.defaultOption.onclick = this.showList;
      this.defaultOption.append(this.selectedItem);

      this.triangle = document.createElement("i");
      this.triangle.className = "fa-solid fa-caret-up triangle";

      this.selectElement.append(this.defaultOption);
      this.selectElement.append(this.triangle);

      this.selectList = document.createElement("ul");
      this.selectList.className = "selectList";
      this.selectElement.append(this.selectList);

      this.selectElementWrapper = document.createElement("div");
      this.selectElementWrapper.className = "selectElementWrapper";
      this.selectElementWrapper.onclick = this.hideList;

      elem.append(this.selectElement);
      elem.append(this.selectElementWrapper);

      for (let item of this.listArr) {
        this.option = document.createElement("li");
        this.option.className = "option";
        this.option.innerHTML = item;
        this.option.onclick = this.selectItem;
        this.selectList.append(this.option);
      }
    }
  };

  showList = () => {
    this.selectList.style.visibility = "visible";
    this.selectList.style.opacity = "1";
    this.defaultOption.onclick = this.hideList;
    this.triangle.style.transform = "translateY(-50%) rotate(180deg)";
    this.selectElementWrapper.style.display = "block";
  };

  hideList = () => {
    this.selectList.style.visibility = "collapse";
    this.selectList.style.opacity = "0";
    this.defaultOption.onclick = this.showList;
    this.triangle.style.transform = "translateY(-50%) rotate(0deg)";
    this.selectElementWrapper.style.display = "none";
  };

  selectItem = (event) => {
    this.selectedItem.innerText = event.target.innerText;
    this.hideList();
  };
}

const myList = new List(["мама", "папа", "я"]);

myList.init(document.getElementById("list"));
myList.init(document.getElementById("list"));

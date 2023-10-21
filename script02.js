function displayProducts(season) {
    const seasonTitle = document.getElementById("seasonTitle");
    const products = document.getElementById("products");

    let productData = [];

    switch (season) {
        case 'spring':
            productData = [
                { name: "丁香粉圓豆花", img: "imagescold/丁香粉圓豆花.jpg" },
                { name: "丁香花生豆花", img: "imagescold/丁香花生豆花.jpg" },
                { name: "丁香綠豆豆花", img: "imagescold/丁香綠豆豆花.jpg" },
                { name: "大紅豆豆花", img: "imagescold/大紅豆豆花.jpg" },
                { name: "芋圓豆花", img: "imagescold/芋圓豆花.jpg" },
                { name: "檸檬豆花", img: "imagescold/檸檬豆花.jpg" },
            ];
            seasonTitle.innerText = "春天的推薦品項";
            break;
        case 'summer':
            productData = [
                { name: "花生豆花", img: "imagescold/花生豆花.jpg" },
                { name: "粉圓豆花", img: "imagescold/粉圓豆花.jpg" },
                { name: "粉圓綠豆豆花", img: "imagescold/粉圓綠豆豆花.jpg" },
                { name: "粉圓綠豆湯", img: "imagescold/粉圓綠豆湯.jpg" },
                { name: "綠豆豆花", img: "imagescold/綠豆豆花.jpg" },
                { name: "綠豆湯", img: "imagescold/綠豆湯.jpg" },
            ];
            seasonTitle.innerText = "夏天的推薦品項";
            break;
        case 'autumn':
            productData = [
                { name: "芋圓豆花", img: "imageshot/芋圓豆花.jpg" },
                { name: "芝麻湯圓豆花", img: "imageshot/芝麻湯圓豆花.jpg" },
                { name: "芝麻湯圓湯", img: "imageshot/芝麻湯圓湯.jpg" },
                { name: "花生豆花", img: "imageshot/花生豆花.jpg" },
                { name: "花生湯", img: "imageshot/花生湯.jpg" },
                { name: "薑汁花生豆花", img: "imageshot/薑汁花生豆花.jpg" },
            ];
            seasonTitle.innerText = "秋天的推薦品項";
            break;
        case 'winter':
            productData = [
                { name: "花生圓仔湯", img: "imageshot/花生圓仔湯.jpg" },
                { name: "紅豆豆花", img: "imageshot/紅豆豆花.jpg" },
                { name: "紅豆花生湯", img: "imageshot/紅豆花生湯.jpg" },
                { name: "紅豆湯", img: "imageshot/紅豆湯.jpg" },
                { name: "紅豆圓仔湯", img: "imageshot/紅豆圓仔湯.jpg" },
                { name: "粉圓豆花", img: "imageshot/粉圓豆花.jpg" },
            ];
            seasonTitle.innerText = "冬天的推薦品項";
            break;
    }

    let productContent = "";
    for (let product of productData) {
        productContent += `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
            </div>
        `;
    }
    products.innerHTML = productContent;
    startCarousel(); // 启动轮播
}

function startCarousel() {
    const products = document.querySelectorAll('.product');
    let currentIndex = 0;

    products[currentIndex].style.display = "block";

    setInterval(() => {
        products[currentIndex].style.display = "none";
        currentIndex++;
        if (currentIndex >= products.length) currentIndex = 0;
        products[currentIndex].style.display = "block";
    }, 2000);  // 每3秒切换到下一张图片
}

// 获取按钮元素
const springButton = document.getElementById("springButton");
const summerButton = document.getElementById("summerButton");
const autumnButton = document.getElementById("autumnButton");
const winterButton = document.getElementById("winterButton");

// 添加按钮点击事件监听器
springButton.addEventListener("click", scrollToBottom);
summerButton.addEventListener("click", scrollToBottom);
autumnButton.addEventListener("click", scrollToBottom);
winterButton.addEventListener("click", scrollToBottom);

// 滚动到页面底部的函数
function scrollToBottom() {
    // 使用 smooth 滚动选项，使滚动效果平滑
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// 获取重新选择按钮元素
const resetButton = document.getElementById("resetButton");

// 添加重新选择按钮的点击事件监听器
resetButton.addEventListener("click", function() {
    // 使用 smooth 滚动选项回到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // 清除季节标题和产品内容
    const seasonTitle = document.getElementById("seasonTitle");
    const products = document.getElementById("products");
    seasonTitle.innerText = "";
    products.innerHTML = "";
});



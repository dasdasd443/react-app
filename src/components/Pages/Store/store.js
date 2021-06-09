const Store = () => {
    return (
        <div class="container page9-container">
        <section class="menu-container">
            <section class="menu-container__accessories">
                <h3>Accessories</h3>
                <nav class="menu-container__accessories--categories">
                    <ul class='menu-container__accessories--categories__links'>
                        <li><a href="">Apple Car</a><span>2</span></li>
                        <li><a href="">Air port & wireless</a><span>48</span></li>
                        <li><a href="">Cables & Docks</a><span>14</span></li>
                        <li><a href="">Cases & Films</a><span>15</span></li>
                        <li><a href="">Charging Devices</a><span>23</span></li>
                        <li><a href="">Connected home</a><span>1</span></li>
                        <li><a href="">Headphones</a><span>95</span></li>
                    </ul>
                </nav>
            </section>
            <section class="menu-container__prices">
                <h3>Prices</h3>
                <section class="menu-container__prices--price-range">
                    <form action="">
                            <label for="ranger"><span>Ranger: </span><span class='ranger-val'>1300</span></label>
                            <input type="range" name="ranger" id="ranger" min="0" max="1000000"/>
                    </form>
                </section>
            </section>
            <section class="menu-container__color">
                <h3>Color</h3>
                <section class="menu-container__color--color-selection">
                    <form action="">
                        <input type="radio" id="c006CFF" name="age" value="30"/>
                        <input type="radio" id="cFC3E39" name="age" value="60"/>
                        <input type="radio" id="c171717" name="age" value="100"/>
                        <input type="radio" id="cFFF600" name="age" value="100"/>
                        <input type="radio" id="cFF00B4" name="age" value="100"/>
                        <input type="radio" id="cEFDFDF" name="age" value="100"/>
                    </form>
                </section>
            </section>
            <section class="menu-container__brand">
                <h3>Brands</h3>
                <section class="menu-container__brand--brand">
                    <nav class="menu-container__brand--brand__selection">
                        <ul class='menu-container__brand--brand__selection__links'>
                            <li><a href="">Apple</a><span>99</span></li>
                            <li><a href="">LG</a><span>99</span></li>
                            <li><a href="">Samsung</a><span>99</span></li>
                            <li><a href="">Siemeens</a><span>99</span></li>
                        </ul>
                    </nav>
                </section>
            </section>
            <section class="menu-container__more">
                <h3>More</h3>
            </section>
        </section>
       
        <section class="items-container">
            <section class="banner-3">
                <section class="banner-3__text">
                    <h1>iPhone 8</h1>
                    <span>Performance and design. Taken right to the edge</span>
                    <a href="">SHOP NOW</a>
                </section>
                <section class="banner-3__pic">
                    <img src="assets/iPhone-3.png" alt=""/>
                </section>
            </section>
            <div class="items-container-menusettings">
                <div class="items-container-menusettings--left">
                    <span class="items-container-menusettings--left--items">13 items</span>
                    <label for="" class="items-container-menusettings--left--sort">Sort By</label>
                    <select name="" id="" class="items-container-menusettings--left--selectNames">
                        <option value="">Name</option>
                    </select>
                    <label for="" class="items-container-menusettings--left--show">Show</label>
                    <select name="" id="" class="items-container-menusettings--left--number">
                        <option value="">12</option>
                    </select>
                </div>
                <div class="items-container-menusettings--icons">
                    <i class="fas fa-list-ul"></i>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <div class="items-container-menus">
                <div class="items-container-menus-boxes">
                    <figure class="items-container-menus-boxes--img">
                        <img src="Frontend-final-exercise/50061505_575246.png" alt=""/>
                    </figure>
                    <div class="items-container-menus-content">
                        <h3 class="items-container-menus-content--h3">Beats Solo On Ear Headphones - Black</h3>
                        <div class="items-container-menus-content--smallDetails">
                            <div class="items-container-menus-content--smallDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                            <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                        </div>
                        <hr class="hr-properties"/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div class="items-container-menus-content--buttons">
                        <button class="items-container-menus-content--buttons--add"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="items-container-menus-content--buttons--heart"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="items-container-menus-boxes">
                    <figure class="items-container-menus-boxes--img">
                        <img src="Frontend-final-exercise/50061505_575246.png" alt=""/>
                    </figure>
                    <div class="items-container-menus-content">
                        <h3 class="items-container-menus-content--h3">Beats Solo On Ear Headphones - Black</h3>
                        <div class="items-container-menus-content--smallDetails">
                            <div class="items-container-menus-content--smallDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                            <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                        </div>
                        <hr class="hr-properties"/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div class="items-container-menus-content--buttons">
                        <button class="items-container-menus-content--buttons--add"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="items-container-menus-content--buttons--heart"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="items-container-menus-boxes">
                    <figure class="items-container-menus-boxes--img">
                        <img src="Frontend-final-exercise/50061505_575246.png" alt=""/>
                    </figure>
                    <div class="items-container-menus-content">
                        <h3 class="items-container-menus-content--h3">Beats Solo On Ear Headphones - Black</h3>
                        <div class="items-container-menus-content--smallDetails">
                            <div class="items-container-menus-content--smallDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                            <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                        </div>
                        <hr class="hr-properties"/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div class="items-container-menus-content--buttons">
                        <button class="items-container-menus-content--buttons--add"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="items-container-menus-content--buttons--heart"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="items-container-menus-boxes">
                    <figure class="items-container-menus-boxes--img">
                        <img src="Frontend-final-exercise/50061505_575246.png" alt=""/>
                    </figure>
                    <div class="items-container-menus-content">
                        <h3 class="items-container-menus-content--h3">Beats Solo On Ear Headphones - Black</h3>
                        <div class="items-container-menus-content--smallDetails">
                            <div class="items-container-menus-content--smallDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                            <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                        </div>
                        <hr class="hr-properties"/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div class="items-container-menus-content--buttons">
                        <button class="items-container-menus-content--buttons--add"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="items-container-menus-content--buttons--heart"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="items-container-menus-boxes">
                    <figure class="items-container-menus-boxes--img">
                        <img src="Frontend-final-exercise/50061505_575246.png" alt=""/>
                    </figure>
                    <div class="items-container-menus-content">
                        <h3 class="items-container-menus-content--h3">Beats Solo On Ear Headphones - Black</h3>
                        <div class="items-container-menus-content--smallDetails">
                            <div class="items-container-menus-content--smallDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                            <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                        </div>
                        <hr class="hr-properties"/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div class="items-container-menus-content--buttons">
                        <button class="items-container-menus-content--buttons--add"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="items-container-menus-content--buttons--heart"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="items-container-menus-boxes">
                    <figure class="items-container-menus-boxes--img">
                        <img src="Frontend-final-exercise/50061505_575246.png" alt=""/>
                    </figure>
                    <div class="items-container-menus-content">
                        <h3 class="items-container-menus-content--h3">Beats Solo On Ear Headphones - Black</h3>
                        <div class="items-container-menus-content--smallDetails">
                            <div class="items-container-menus-content--smallDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                            <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                        </div>
                        <hr class="hr-properties"/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus.
                        </p>
                        <div class="items-container-menus-content--buttons">
                        <button class="items-container-menus-content--buttons--add"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="items-container-menus-content--buttons--heart"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="items-container-menuNumbers">
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
            </div>

           

        </section>
    </div>
    );
}

export default Store;
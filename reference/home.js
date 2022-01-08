import React from 'react'
import styled from 'styled-components'

const Card = styled.div`

`

const Darken = styled.div`
  &:after {
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.6);
  }
`

class Home extends React.Component {
  render() {
    return (
      <div style={{ "margin-top": "72px" }}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Darken className="carousel-item active">
              <img src={"https://static.media.thinknum.com/media/uploads/blog/.thumbnails/uniqlo_main.jpg/uniqlo_main-770x400.jpg"} className="d-block w-100" style={{ height: "400px", "object-fit": "cover" }} alt="carousel-1" />
              <div className="carousel-caption d-none d-md-block" style={{ top: "30%", zIndex: "1" }}>
                <h1 style={{ fontSize: "70px" }}>Welcome to Wearhouse</h1>
              </div>
            </Darken>
            <div className="carousel-item">
              <img src={"https://static.media.thinknum.com/media/uploads/blog/.thumbnails/uniqlo_main.jpg/uniqlo_main-770x400.jpg"} className="d-block w-100" style={{ height: "00px", "object-fit": "cover" }} alt="carousel-2" />
            </div>
          </div>
        </div>
        <h1 style={{ margin: "20px" }}>Our Products</h1>
        <div className="display">
          <div className="container mt-4">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/405138/item/goods_69_405138.jpg?width=2000"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/439672/item/goods_09_439672.jpg?width=1600&impolicy=quality_75"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441854/item/goods_50_441854.jpg?width=1600&impolicy=quality_75"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/428720/item/goods_32_428720.jpg?width=1600&impolicy=quality_75"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/437886/item/goods_09_437886.jpg?width=1600&impolicy=quality_75"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/429066/item/goods_01_429066.jpg?width=1600&impolicy=quality_75"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432598/item/goods_39_432598.jpg?width=1600&impolicy=quality_75"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src={"https://i.pinimg.com/originals/c9/2e/29/c92e296e5e27a1623792306c348a64ee.jpg"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

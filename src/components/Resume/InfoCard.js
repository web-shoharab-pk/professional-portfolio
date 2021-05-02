import React from 'react';

const InfoCard = () => {
    return (
        <div>
            <div class="card ovf-hidden">

                <div class="view overlay">
                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo11.jpg" alt="Card  cap" />
                    <a href="/ddd">
                        <div class="mask waves-effect waves-light rgba-white-slight"></div>
                    </a>
                </div>

                <div class="card-body">

                    <a href="/ddd" class="activator mr-4"><i class="fas fa-share-alt"></i></a>

                    <h4 class="card-title">Card title</h4>
                    <hr />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
    content.</p>
                    <a href="/ddd" class="link-text">
                        <h5>Read more <i class="fas fa-angle-double-right ml-2"></i></h5>
                    </a>

                </div>

                <div class="card-reveal white">

                    <div class="content text-center">

                        <h4 class="card-title font-weight-bold my-4">Social shares <i class="fas fa-times text-muted"></i></h4>
                        <hr />
                        <ul class="list-unstyled list-inline d-flex justify-content-center flex-wrap">
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-dribbble"><i class="fab fa-dribbble"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-slack"><i class="fab fa-slack-hash"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-ins"><i class="fab fa-instagram"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-pin"><i class="fab fa-pinterest"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-tw"><i class="fab fa-twitter"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-gplus"><i class="fab fa-google-plus-g"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn-floating btn-git"><i class="fab fa-github"> </i></a></li>
                        </ul>
                        <h5 class="font-weight-bold my-4">Join our community</h5>
                        <hr />
                        <ul class="list-unstyled list-inline d-flex justify-content-center flex-wrap mt-4">
                            <li class="list-inline-item"><a href="/ddd" class="btn btn-fb px-4"><i class="fab fa-facebook-f"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn btn-tw px-4"><i class="fab fa-twitter"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn btn-li px-4"><i class="fab fa-linkedin-in"> </i></a></li>
                            <li class="list-inline-item"><a href="/ddd" class="btn btn-ins px-4"><i class="fab fa-instagram"> </i></a></li>
                        </ul>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default InfoCard;
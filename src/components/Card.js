import React, {useEffect} from 'react'
import Adidas from '../adidas.png'
import Gun from '../gun.png'
import './card.css'

const Card = () => {

    useEffect(() => {
       
        const card = document.querySelector('.card');
        const container = document.querySelector('.container');
        const title = document.querySelector('.title');
        const sneaker = document.querySelector('.sneaker img');
        const purchase = document.querySelector('.purchase button');
        const description = document.querySelector('.info h3');
        const sizes = document.querySelector('.sizes')

        container.addEventListener("mousemove",(e) =>{
            console.log(e.pageX,e.pageY);
            let xAxis = (window.innerWidth/2 - e.pageX)/20;
            let yAxis = (window.innerHeight/2 - e.pageY)/20;

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            title.style.transform = 'translateZ(150px)'
            sneaker.style.transform = 'translateZ(150px) rotateZ(-30deg)'
            purchase.style.transform = 'translateZ(150px)'
            description.style.transform = 'translateZ(150px)'
            sizes.style.transform = 'translateZ(150px)'
            
        });

        container.addEventListener("mouseenter", (e) => {
            card.style.transition="none";
        })


        container.addEventListener("mouseleave",(e) => {
            card.style.transition= "all 0.3s ease";
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            title.style.transform = 'translateZ(0)';
            sneaker.style.transform = 'translateZ(0px)'
            purchase.style.transform = 'translateZ(0px)'
            sizes.style.transform = 'translateZ(0px)'
            description.style.transform = 'translateZ(0px)'
        })

    })



    return (
        
        <>
            <div className="container">
                <div className="card">
                    <div className="sneaker">
                        <div className="circle"></div>
                        <img src={Adidas} alt="adidas"></img>
                    </div>
                    <div className="info">
                        <h1 className="title">
                            Addidas
                        </h1>
                        <h3>
                            Future ready trainers with wrapped boost for exception comfort
                        </h3>
                        <div className="sizes">
                            <button>37</button>
                            <button class="active">39</button>
                            <button>42</button>
                            <button>47</button>
                        </div>
                        <div className="purchase">
                            <button>
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

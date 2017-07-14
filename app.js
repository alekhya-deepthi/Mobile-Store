/**
 * Created by Aditya on 13-Jul-17.
 */
(
    function (){
        var app=angular.module("MobileStore",[]);
        var iphone={
            name:"Iphone 7 plus",
            color:"Rose Gold",
            memory:"3GB RAM,128GB Internal Storage",
            price:75999.00,
            image:"img/iphone1.jpg",
            isSoldOut:true,
            activeTab:"Specifications"

        };
        var samsung={
            name:"Samsung s8",
            color:"Grey",
            memory:"6GB RAM,64GB Internal Storage",
            price:56000.00,
            image:"img/samsung.jpg",
            isSoldOut:true,
            activeTab:"Specifications"
        };
        var note={
            name:"Redmi note4",
            color:"Gold",
            memory:"2GB RAM,64GB Internal Storage",
            price:10000.00,
            image:"img/iphone1.jpg",
            isSoldOut:true,
            activeTab:"Specifications"
        };
        var nokia= {
            name: "Nokia edge 2017",
            color: "Grey",
            memory: "3GB RAM,32GB internal storage",
            price: 50000.00,
            image: "img/samsung.jpg",
            isSoldOut: true,
            activeTab:"Specifications"
        };
        var yu= {
            name: "Yureka plus",
            color: "White",
            memory: "2GB RAM,32GB Internal Storage",
            price: 12000.00,
            image: "img/iphone1.jpg",
            isSoldOut: true,
            activeTab:"Specifications"
        };
        var cool= {
            name: "Coolpad max",
            color: "Rose Gold",
            memory: "2GB RAM,64GB Internal Storage",
            price: 15000.00,
            image: "img/samsung.jpg",
            isSoldOut: true,
            activeTab:"Specifications"
        };
        var cool1= {
            name: "Coolpad max",
            color: "Rose Gold",
            memory: "2GB RAM,64GB Internal Storage",
            price: 15000.00,
            image: "img/samsung.jpg",
            isSoldOut: true,
            activeTab:"Specifications"
        };
        app.controller("StoreController",function() {
            this.mobiles=[iphone,samsung,note,nokia,yu,cool,cool1];

            this.setActiveTab=function (mobile,tab) {
                mobile.activeTab=tab;
                
            }
        });
    })();

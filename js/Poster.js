AFRAME.registerComponent("comics-posters", {
  schema:{
    state:{type:"string",default:"places-list"},
    selectedCard:{type:"string",default:"#card1"}

  },

    init: function () {
      this.postersContainer = this.el;
      this.createCards()
    },
    tick:function(){
      const{state}=this.el.getAttribute("comics-posters")
      if(state==="view"){
        this.hideEl([this.postersContainer])
        this.showView()
      }
  
    },
  
    hideEl:function(elList){
      elList.map(el=>{
        el.setAttribute("visible",false)
      })
  
    },
    showView:function(){
      const{selectedCard}=this.data
      const skyEl=document.querySelector("#main-container")
      skyEl.setAttribute("material",{
        src:`./assets/about_picture${selectedCard}/place-0.jpg`,
        color:"#fff"
      })
  
    },
    createCards: function () {
      const comicsRef = [
        {
          id: "superman",
          title: "SuperMan",
          url: "./assets/superman.jpeg",
        },
        {
          id: "spiderman",
          title: "SpiderMan",
          url: "./assets/spiderman.jpeg",
        },
  
        {
          id: "hulk",
          title: "Hulk",
          url: "./assets/hulk.jpeg",
        },
        {
          id: "black panther",
          title: "BlackPanther",
          url: "./assets/blackpanther.jpeg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of comicsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
        const borderEl=this.createBorder(position,item.id)
        const comics=this.createPoster(item)
        borderEl.appendChild(comics)
        const titleEl=this.creteTitleEL(position,item)
        borderEl.appendChild(titleEl)
  
        this.postersContainer.appendChild(borderEl);
      }
    },
  
        // Border Element
    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
          primitive:"plane",
          width:20,
          height:20
  
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
          color:"white",
          opacity:0.8
  
        })
        return entityEl
        },
        
        
        createPoster:function(item){
          const entityEl=document.createElement("a-entity")
          entityEl.setAttribute("visible",true)
          entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:30
  
          })
          entityEl.setAttribute("position",{x:0,y:5,z:0.1})
          entityEl.setAttribute("material",{src:item.url})
          return entityEl
  
        },
        creteTitleEL:function(position,item){
          const entityEl=document.createElement("a-entity")
          entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:90,
            color:"#e65100",
            value:item.title
          })
          const elPosition=position
          elPosition.y=-25
          
          entityEl.setAttribute("position",elPosition)
          entityEl.setAttribute("visible",true)
          return entityEl
        }
       
        
    
  });
  
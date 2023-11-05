FRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();

      
    },
    handleClickEvents:function(){
      this.el.addEventListener("click",evt=>{
        const  posterContainer=document.querySelector("#posters-container")
        const {state}=posterContainer.getAttribute("comics-posters")

        if (state==="places-list"){
          const id=this.el.getAttribute("id");
          const placesId=[
            "superman", "spiderman", "hulk", "black panther"
          ];
          if (placesId.includes(id)) {
            posterContainer.setAttribute("comics-posters",{
              state:"view",
              selectedCard:id
            }

            )
          }
        }

      })

    },
    
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["superman", "spiderman", "hulk", "black panther"];
      if (placesId.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=> {
        const {selectedItemId}=this.data
        if(selectedItemId){
          const el=document.querySelector(`#${selectedItemId}`)
          const id=el.getAttribute("id")
          if(id==selectedItemId){
            el.setAttribute("material",{
              color:"#0077cc",
              opacity:1
            })
          }
        }
      })
      
    },
  });
  
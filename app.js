 let w,h;
 class pt{
 	constructor(x,y){
 		this.x = x;
 		this.y = y;
 	}
 	update(){
 		this.x += Math.random()*1.5+1-.75;
 		if(this.x > w) this.x -= w;
 		this.y += Math.random()*1.5+1-.75;
 		if(this.y > h) this.y -= h;
 	}
 }
 let sketch = function(p) {
      let pts = []

    p.setup = function(){
      p.createCanvas(innerWidth, innerHeight-70);
      // p.background(0);
      w = p.width;
      h = p.height;
      for (let i = 0; i < 100; i++) {
      	pts.push(new pt(Math.random()*p.width, Math.random()*p.height))
      }
    			p.stroke(251,20,235)
    }
    p.draw = function() {
 		// p.background(none); 
 		p.clear()   	
  		for(let point of pts){
  			p.fill(251,20,235)
    		p.ellipse(point.x, point.y, 10)
    		point.update()
    		for (let other of pts) {
    			if(Math.sqrt((point.x-other.x)*(point.x-other.x) + (point.y-other.y)*(point.y-other.y)) < 70){
    				p.line(point.x, point.y, other.x, other.y)
    			}
    
    		} 
    	}
    }

  };
  new p5(sketch, 'container');
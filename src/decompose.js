c.style.background=`linear-gradient(#aaa,#fff)`,c.style.position=`fixed`,c.style.width=`100%`,c.height=h=1080,s=96,e=1.25,
d=new(AudioContext),m=d.createScriptProcessor(2048,c.style.top=c.style.left=u=l=0,1),m.connect(d.destination),m.onaudioprocess=t=>
{for(A=t.outputBuffer.getChannelData(0),i=0;i<2048;)A[i++]=o(2**(u%48/16|0)*`7AR`.charCodeAt(((u<56)*(u/8|0)+i%2)%3))*(3-2.4*e),
u+=(u<56)/d.sampleRate;for(c.width=w=1920,u>56&&(C.scale(3,3),C.fillText(`decompose=#r`,420,260)),C.setTransform(1,0,0,1,0,0),
C.rotate(u/500+.1*(u>8)-(u>24)/5),C.scale(S=1+u/500*(u<40)+(u<24&&u>16)*(u/16)*.15,S),a=4;a>0;a--){for(f=1.1*w/a,i=0;i<w+56;i+=7/S)
for(x=(-1e3*(u>32)+(i+10*u*(5-a)**2))%f,y=h-a*Math.tan((x/7|0)%300)*20-1.08**((x%f>f/2?f-x:x)*a/10),y>h&&x>.4*f&&x<.6*f&&(y=0),
u%56>40&&y<0&&(y=h),(x>f/3&&x<f-f/3||u>56)&&(y+=l),C.fillRect(i,y,7/S,h-y+56),0;y<h;y+=s/S)C.fillStyle=
`hsl(0,0%,${80*(u>40)*(u>48||(u-40)/8)+12*a+10*Math.sin(i*.02+y*.02)*(x<f/2)-5*(Math.cos(i*.02+y*.02)+1)*(x>f/2)}%`,
C.fillRect(i+Math.random()*7-7/2,y+Math.random()*s-s/2,7*(.5*Math.random()+.5)/S,s*(.5*Math.random()+.5)/S);
C.fillStyle=`rgb(255,${255*(u%48<28)},${255*(u%48<28)||(u-28)*8},${e=.23*(u>43)||(u<24)/5+(u+4)%8/4-.5*((u+4)%8>4)*((u+4)%8-4)}`,
C.fillRect(-600,-600,2*w,2*h)}l+=5*(u%48>32)*(u-32),s-=.01*(u>2)},o=t=>t*u%2/8+.1*(1-2*(t*u*2&1))+.02*Math.random()

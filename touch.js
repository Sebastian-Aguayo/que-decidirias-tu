/* Mantener pulsado para caminar; soltar o cancelar siempre detiene el movimiento. */
(function(root){
  function bind(buttons,actions){
    const held=new Map();
    function release(pointerId){const key=held.get(pointerId);if(!key)return;held.delete(pointerId);if(![...held.values()].includes(key))actions.release(key);}
    function releaseAll(){const keys=new Set(held.values());held.clear();keys.forEach(key=>actions.release(key));}
    buttons.forEach(button=>{
      button.addEventListener('pointerdown',event=>{
        if(!actions.enabled()||(event.pointerType==='mouse'&&event.button!==0))return;
        event.preventDefault();
        const key=button.dataset.move;held.set(event.pointerId,key);actions.press(key);
        try{button.setPointerCapture(event.pointerId);}catch{}
      });
      ['pointerup','pointercancel','lostpointercapture'].forEach(type=>button.addEventListener(type,event=>release(event.pointerId)));
      button.addEventListener('click',event=>{event.preventDefault();if(event.detail===0&&actions.enabled())actions.step(button.dataset.move);});
    });
    return {releaseAll};
  }
  root.TouchControls={bind};
  if(typeof module!=='undefined')module.exports=root.TouchControls;
})(typeof window!=='undefined'?window:globalThis);

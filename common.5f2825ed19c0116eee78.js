"use strict";(self.webpackChunkplay=self.webpackChunkplay||[]).push([[592],{6784:(d,u,l)=>{l.d(u,{r:()=>p});var t=l(7716),n=l(8583),c=l(1095);function m(a,i){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",2),t.NdJ("click",function(){return t.CHM(e),t.oxw().action()}),t._uU(2),t.qZA(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("color",e.color),t.xp6(1),t.Oqu(e.texto)}}function s(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){return t.CHM(e),t.oxw().action()}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("color",e.color),t.xp6(1),t.Oqu(e.texto)}}let p=(()=>{class a{constructor(){this.evento=new t.vpe}ngOnInit(){}action(){this.evento.emit("Button")}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-button"]],inputs:{texto:"texto",color:"color",type:"type"},outputs:{evento:"evento"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["Border",""],["mat-stroked-button","",3,"color","click"],["mat-raised-button","",3,"color","click"]],template:function(e,_){if(1&e&&(t.YNc(0,m,3,2,"ng-container",0),t.YNc(1,s,2,2,"ng-template",null,1,t.W1O)),2&e){const o=t.MAs(2);t.Q6J("ngIf","borde"===_.type)("ngIfElse",o)}},directives:[n.O5,c.lW],styles:["button[_ngcontent-%COMP%]{margin-right:15px!important}@media (max-width: 768px){button[_ngcontent-%COMP%]{width:100%;border:1px solid;margin-bottom:20px}}.mat-green[_ngcontent-%COMP%]{color:green;border:1px solidgreen}.mat-warn.mat-stroked-button[_ngcontent-%COMP%]{border:1px solid red}"]}),a})()},8483:(d,u,l)=>{l.d(u,{a:()=>i});var t=l(3679),n=l(7716),c=l(8583);function m(e,_){if(1&e&&(n.ynx(0),n._UZ(1,"input",6),n.BQk()),2&e){const o=n.oxw();n.xp6(1),n.Q6J("type",o.type)("name",o.name)("id",o.name)("placeholder",o.placeholder)("formControlName",o.name)("required",o.required)("readonly",o.readonly)("value",o.value)}}function s(e,_){if(1&e&&(n.TgZ(0,"textarea",7),n._uU(1),n.qZA()),2&e){const o=n.oxw();n.Q6J("name",o.name)("rows",o.rows)("id",o.name)("placeholder",o.placeholder)("formControlName",o.name)("required",o.required)("readonly",o.readonly),n.xp6(1),n.Oqu(o.value)}}function p(e,_){if(1&e&&(n.TgZ(0,"span",8),n._uU(1),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.hij(" ",o.name," es requerido ")}}const a=function(e){return{isvalid:e}};let i=(()=>{class e{constructor(){}ngOnInit(){this.formParent.addControl(this.name,new t.NI(""===this.value?"":this.value,this.required?t.kI.required:null))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-input"]],inputs:{label:"label",rows:"rows",value:"value",type:"type",placeholder:"placeholder",readonly:"readonly",name:"name",formControlName:"formControlName",required:"required",formParent:"formParent"},decls:9,vars:9,consts:[[3,"formGroup"],[3,"for"],[3,"ngClass"],[4,"ngIf","ngIfElse"],["textArea",""],["class","isvalid",4,"ngIf"],[1,"form-control",3,"type","name","id","placeholder","formControlName","required","readonly","value"],[1,"form-control",3,"name","rows","id","placeholder","formControlName","required","readonly"],[1,"isvalid"]],template:function(o,r){if(1&o&&(n.TgZ(0,"fieldset",0),n.TgZ(1,"label",1),n._uU(2),n.TgZ(3,"span",2),n._uU(4,"*"),n.qZA(),n.qZA(),n.YNc(5,m,2,8,"ng-container",3),n.YNc(6,s,2,8,"ng-template",null,4,n.W1O),n.YNc(8,p,2,1,"span",5),n.qZA()),2&o){const f=n.MAs(7);n.Q6J("formGroup",r.formParent),n.xp6(1),n.Q6J("for",r.name),n.xp6(1),n.hij("",r.label," "),n.xp6(1),n.Q6J("ngClass",n.VKq(7,a,r.formParent.controls[r.name].invalid&&(r.formParent.controls[r.name].dirty||r.formParent.controls[r.name].touched))),n.xp6(2),n.Q6J("ngIf","text"===r.type||"password"===r.type)("ngIfElse",f),n.xp6(3),n.Q6J("ngIf",r.formParent.controls[r.name].invalid&&(r.formParent.controls[r.name].dirty||r.formParent.controls[r.name].touched))}},directives:[t.JL,t.sg,c.mk,c.O5,t.Fj,t.JJ,t.u,t.Q7],styles:["@media (max-width: 768px){input[_ngcontent-%COMP%]{height:50px}}label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;font-size:12px}@media (max-width: 768px){label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-size:14pxe}}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:none}label[_ngcontent-%COMP%] > span.isvalid[_ngcontent-%COMP%]{display:inline-block}.isvalid[_ngcontent-%COMP%]{color:#a70b0b;font-size:10px}"]}),e})()},1614:(d,u,l)=>{l.d(u,{g:()=>m});var t=l(8583),n=l(3679),c=l(7716);let m=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[[t.ez,n.u5,n.UX]]}),s})()},710:(d,u,l)=>{var t;l.d(u,{P:()=>t}),(t||(t={})).InputClass=class{constructor(s,p,a,i,e,_=!1,o,r){this.text=s,this.place=p,this.required=a,this.name=i,this.type=e,this.readonly=_,this.rows=o,this.value=r}}}}]);
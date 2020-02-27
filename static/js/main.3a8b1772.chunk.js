(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__1D7in",Modal:"Modal_Modal__vmMkb"}},11:function(e,a,t){e.exports={error:"Error_error__2nQdq",error__text:"Error_error__text__1ZRkl"}},23:function(e,a,t){},24:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__NxBf8"}},25:function(e,a,t){e.exports={Button:"Button_Button__3G_ri"}},29:function(e,a,t){e.exports=t(73)},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),o=t.n(l),c=t(23),i=t.n(c),s=t(28),u=t(12),m=t(3),h=t(4),d=t(6),p=t(5),f=t(7),g=t(8),b=t.n(g),v=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.handleOnChange=function(e){t.setState({value:e.target.value})},t.handleOnSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state.value),t.setState({value:""})},t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("header",{className:b.a.Searchbar},r.a.createElement("form",{onSubmit:this.handleOnSubmit,className:b.a.Form},r.a.createElement("button",{type:"submit",className:b.a.button},r.a.createElement("span",{className:b.a.label},"Search")),r.a.createElement("input",{className:b.a.input,onChange:this.handleOnChange,value:e,type:"text",autoComplete:"off",placeholder:"Search images and photos"})))}}]),a}(n.Component),_=t(9),y=t.n(_),E=function(e){var a=e.data,t=e.onClick;return r.a.createElement("li",{onClick:function(){return t(a.id)},role:"presentation",className:y.a.ImageGalleryItem},r.a.createElement("img",{src:a.imageURL,alt:a.tags,className:y.a.ImageGalleryImage}))},O=t(24),k=t.n(O),S=function(e){var a=e.data,t=e.openModal;return r.a.createElement(r.a.Fragment,null,a.length&&r.a.createElement("ul",{className:k.a.ImageGallery},a.map((function(e){return r.a.createElement(E,{data:e,onClick:t,key:e.id})}))))},I=t(25),C=t.n(I),j=function(e){var a=e.onClick;return r.a.createElement("button",{type:"button",onClick:a,className:C.a.Button},r.a.createElement("span",null,"loade more"))},M=t(26),w=t.n(M),N=function(e,a){return w.a.get("".concat("https://pixabay.com/api/","?key=").concat("14889783-61c61fb8f41b7c3ced9fa5b10","&q=").concat(e,"&image_type=").concat("photo","&page=").concat(a,"&orientation=").concat("horizontal","&per_page=").concat(12))},G=t(10),x=t.n(G),L=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).overlayRef=Object(n.createRef)(),t.handleKeyPressESC=function(e){27===e.keyCode&&t.props.closeModal()},t.handleBackdropClick=function(e){var a=t.overlayRef.current;e.target===a&&t.props.closeModal()},t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPressESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPressESC)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.Overlay,ref:this.overlayRef,onClick:this.handleBackdropClick,role:"presentation"},r.a.createElement("div",{className:x.a.Modal},e)))}}]),a}(n.Component),R=(t(51),t(27)),A=t.n(R),B=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{type:"Puff",color:"#3f51b5",height:100,width:100}))}}]),a}(n.Component),D=t(11),F=t.n(D),P=function(e){var a=e.children;return r.a.createElement("div",{className:F.a.error},r.a.createElement("span",{className:F.a.error__text},a))},U=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],searchValue:"",page:1,isLoading:!1,isModal:!1,imageId:null,error:!1},t.getDataApi=function(e,a){var n=0;n=1===a?0:document.documentElement.scrollHeight-144,t.setState({isLoading:!0}),N(e,a).then((function(e){var a=e.data;t.setState((function(e){return{images:[].concat(Object(u.a)(e.images),Object(u.a)(a.hits))}}))})).catch((function(e){throw new P(e)})).finally((function(){(t.state.images.length<1?t.setState({error:!0}):t.setState({error:!1}))&&t.setState({isLoading:!1}),window.scrollTo({top:n,behavior:"smooth"})}))},t.handleSearchOnSubmit=function(e){t.setState({searchValue:e,images:[],page:1})},t.handleClickOnMore=function(){var e=t.state.page;t.setState({page:e+1})},t.handleClickIsOpenModal=function(e){t.setState({isModal:!0,imageId:e})},t.handleClickIsCloseModal=function(e){t.setState({isModal:!1})},t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.searchValue,r=t.page;a.searchValue===n&&a.page===r||this.getDataApi(n,r)}},{key:"render",value:function(){var e,a=this.state,t=a.images,n=a.isLoading,l=a.isModal,o=a.imageId,c=a.error,i=(e=o,t.find((function(a){return a.id===e})));return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(L,{closeModal:this.handleClickIsCloseModal},r.a.createElement("img",{src:i.largeImageURL,alt:i.tags})),r.a.createElement(v,{onSubmit:this.handleSearchOnSubmit}),r.a.createElement(S,{data:function(e){return e.map((function(e){return Object(s.a)({imageURL:e.webformatURL},e)}))}(t),openModal:this.handleClickIsOpenModal}),c&&r.a.createElement(P,null,"Image not found!"),n&&r.a.createElement(B,null),t.length>0&&r.a.createElement(j,{onClick:this.handleClickOnMore}))}}]),a}(n.Component);o.a.render(r.a.createElement(U,{className:i.a.App}),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar___PA4l",Form:"Searchbar_Form__3NG4k",button:"Searchbar_button__3_PW5",label:"Searchbar_label__1noQd",input:"Searchbar_input__2raTR"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__9NYKI",ImageGalleryImage:"ImageGalleryItem_ImageGalleryImage__2wCKl"}}},[[29,1,2]]]);
//# sourceMappingURL=main.3a8b1772.chunk.js.map
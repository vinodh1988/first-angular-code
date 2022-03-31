### Directives

#### Structural Directives

  As the name implies these Directives brings Structural changest
  ie.., changes in the template

 * Structural Directives either generates temples or hide/unhide template
 * all Structural while usage shoud be prefixed with * 

 Inbuilt Structural Directives - ngFor, ngIf, ngSwitch

 #### Attribute Directives

    Attribute Directives usually changes the behavior [data and styling] 
    of the component

    Attribute directives are further classified into

* input Directives 
* output Directives
* input output directives

## input Directives

   * Receives Input 
   * it is enclosed with []
   * target of Input directive can be any html element or user defined component name

   examples : ngStyle, style, ngClass, routerLink...

## output Directives
   
* listens to the event
* call the event handler mention in the right side upon event
* always enclosed within ()

 examples : click, change,keyup,keydown, mouseover

 ## input output Directives

 * it performs both job of input and output directives
 * Enclosed within [()]

 Example : only input output direct ngModel

ngModel is applied on form elements it behaves two ways

<input type="text" [(ngModel)]="name">

If variable name already has a value it would be filled in the text box
if you type in the text box it would be assigned to  name



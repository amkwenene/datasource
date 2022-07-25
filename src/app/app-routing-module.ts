import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicJavaCodeComponent } from "./basic-java-code/basic-java-code.component";
import { Chapter1Component } from "./components/chapter1/chapter1.component";
import { Chapter2Component } from "./components/chapter2/chapter2.component";
import { SeleniumIntroductionComponent } from "./components/selenium-introduction/selenium-introduction.component";
import { HomeComponent } from "./home/home.component";
import { SeleniumWebDriverComponent } from "./selenium-web-driver/selenium-web-driver.component";
import { SpringbootServicesComponent } from "./springboot-services/springboot-services.component";

const routes:Routes=[
    {
        path:'home',component:HomeComponent,
        children:[
            {path:"selenium",component:SeleniumWebDriverComponent,
            children:[        
                {path:"",component:SeleniumIntroductionComponent},
                {path:"chapter1",component:Chapter1Component},
                {path:"chapter2",component:Chapter2Component},
                {path:'**',redirectTo:"selenium"}

            ]
            },
            {path:"basicjava",component:BasicJavaCodeComponent},
            {path:"springboot",component:SpringbootServicesComponent},
            {path:'**',redirectTo:"selenium"}
        ],

    },
    {path:'**',redirectTo:"home"}

]
@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule],
        providers:[]
    }
)
export class appRoutingModule{

}

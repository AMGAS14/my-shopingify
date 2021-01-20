
import { Component } from '@angular/core' ;


@Component({
    selector: 'app-post-list' ,
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'] 
})
export class PostListComponent {

    posts = [
        { title: "First Post", content: "This is First post´s content"},
        { title: "Second Post", content: "This is Second post´s content"},
        { title: "Third Post", content: "This is third post´s content"}
    ] ;
}
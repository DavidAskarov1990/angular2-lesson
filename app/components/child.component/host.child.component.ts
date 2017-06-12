
import { Component, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    moduleId: module.id,
    selector: 'host-child',
    templateUrl: 'host.child.component.html'
})
export class HostChildComponent {
    @ViewChild(ChildComponent)
    block: ChildComponent;

    @ViewChildren(ChildComponent)
    blocks: QueryList<ChildComponent>;

    showBlock(){
        this.block.show();
    }

    showAllBlocks(){
        this.blocks.forEach( x => {
            x.show();
        })
    }
}
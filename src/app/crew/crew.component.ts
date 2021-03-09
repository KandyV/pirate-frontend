import { Component, OnInit } from '@angular/core';
import {CrewModel} from '../models/crew.model';
import {CrewService} from '../services/crew.service';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crews: CrewModel[] = [];
  newCrew: CrewModel = new CrewModel(null,null,null);
  updateCrew: CrewModel = new CrewModel(null,null,null);
  captain: string;
  nationality: string;
  size: number;
  id: number;
  editIsTrue = false;
  constructor(private crewService: CrewService) { }

  ngOnInit(): void {
    this.getAllCrews();
  }

  addCrew() {
    this.newCrew.captain = this.captain;
    this.newCrew.size = this.size;
    this.newCrew.nationality = this.nationality;
    this.crewService.createNewCrews(this.newCrew).subscribe( (res) => {
      this.getAllCrews();
      this.captain = null;
      this.nationality = null;
      this.size = null;
    })
  }

  getAllCrews() {
    this.crewService.getAllCrews().subscribe( (crews: CrewModel[]) => {
      this.crews = crews;
    })
  }

  editCrew(pos: CrewModel) {
    this.editIsTrue = !this.editIsTrue;
    this.captain = pos.captain;
    this.size = pos.size;
    this.nationality = pos.nationality;
    this.id = pos.id;
  }

  editCrewSave() {
    this.updateCrew.captain = this.captain;
    this.updateCrew.size = this.size;
    this.updateCrew.nationality = this.nationality;
    this.updateCrew.id = this.id;
    console.log(this.updateCrew);
    this.crewService.updateCrews(this.updateCrew).subscribe( (res) => {
      this.editIsTrue = !this.editIsTrue;
      this.getAllCrews();
      this.captain = null;
      this.size = null;
      this.nationality = null;
    })
  }

  deleteCrew(pos: CrewModel) {
    this.crewService.deleteCrews(pos.id).subscribe( (res) => {
      this.getAllCrews();
    })
  }

  editCrewCancel() {
    this.editIsTrue = !this.editIsTrue;
    this.getAllCrews();
    this.captain = null;
    this.size = null;
    this.nationality = null;
  }
}

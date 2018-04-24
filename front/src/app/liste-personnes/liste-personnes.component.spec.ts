import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListePersonnesComponent } from "./liste-personnes.component";
import { HttpPersonneService } from "../services/http-personne.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

describe("ListePersonnesComponent", () => {
  let component: ListePersonnesComponent;
  let fixture: ComponentFixture<ListePersonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient, HttpPersonneService],
      declarations: [ListePersonnesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

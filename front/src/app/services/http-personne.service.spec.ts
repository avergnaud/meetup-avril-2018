import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HttpPersonneService } from "./http-personne.service";
import { HttpClientModule } from "@angular/common/http";

const mockPersonnes = {
  _embedded: {
    personnes: [
      {
        nom: "Yan",
        eMail: "y@mail.com",
        _links: {
          self: {
            href: "http://localhost:8080/personnes/1"
          },
          personne: {
            href: "http://localhost:8080/personnes/1"
          }
        }
      },
      {
        nom: "Sim",
        eMail: "s@mail.com",
        _links: {
          self: {
            href: "http://localhost:8080/personnes/2"
          },
          personne: {
            href: "http://localhost:8080/personnes/2"
          }
        }
      }
    ]
  },
  _links: {
    self: {
      href: "http://localhost:8080/personnes"
    },
    profile: {
      href: "http://localhost:8080/profile/personnes"
    }
  }
};

describe("HttpPersonneService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpPersonneService]
    });
  });

  it(
    "should be created",
    inject([HttpPersonneService], (service: HttpPersonneService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    "should get personnes",
    inject(
      [HttpPersonneService, HttpTestingController],
      (service: HttpPersonneService, httpMock: HttpTestingController) => {

        /* test métier */
        service.getPersonnes().subscribe(personnes => {
          expect(personnes.length).toBe(2);
        },
        error => {
          console.log("error " + JSON.stringify(error));
        });

        /* test HTTP */
        const request = httpMock.expectOne(request => 
          request.method === "GET" && request.url === "http://localhost:8080/personnes"
        );
  
        /* mock HTTP */
        request.flush(mockPersonnes);
        httpMock.verify();
      }
    )
  );
});

import { TestBed } from '@angular/core/testing';

import { BowlingService } from './bowling.service';

describe('BowlingService', () => {
  let service: BowlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize a game'), () => {
    
    service.initDefaultGame();
    
    expect(service.game).toBeTruthy();
  };

  // it('should initialize a default game with 10 frames'), () => {
    
  //   service.initDefaultGame();
    
  //   expect(service.game.length).toEqual(10);
  // };
});

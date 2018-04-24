package com.cat.back;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface PersonneRepository extends CrudRepository<Personne,Long> {}
package com.dreamteam.api.dao;

import com.dreamteam.api.model.bo.AbstractModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface ModelDAO<T extends AbstractModel> extends JpaRepository<T, Long> {
}

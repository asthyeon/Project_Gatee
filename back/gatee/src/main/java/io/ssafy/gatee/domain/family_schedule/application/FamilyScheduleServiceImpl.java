package io.ssafy.gatee.domain.family_schedule.application;

import io.ssafy.gatee.domain.family_schedule.dao.FamilyScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FamilyScheduleServiceImpl implements FamilyScheduleService {

    FamilyScheduleRepository familyScheduleRepository;
}

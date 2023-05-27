package com.example.cwp.dto;

import com.example.cwp.entity.Group;
import com.example.cwp.entity.GroupMember;
import com.example.cwp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class GroupMemberDto {
    private Long id;
    private User user;

    private Group group;

    public GroupMemberDto(GroupMember groupMember) {
        this.id = groupMember.getId();
        this.user = groupMember.getUser();
        this.group = groupMember.getGroup();
    }
}

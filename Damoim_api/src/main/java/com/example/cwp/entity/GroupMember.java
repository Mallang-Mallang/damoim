package com.example.cwp.entity;

import com.example.cwp.dto.GroupMemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GroupMember {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member")
    private User user;

    @ManyToOne
    @JoinColumn(name = "groupid")
    private Group group;

    public GroupMember(GroupMemberDto groupMemberDto) {
        this.id = groupMemberDto.getId();
        this.user = groupMemberDto.getUser();
        this.group = groupMemberDto.getGroup();
    }
}

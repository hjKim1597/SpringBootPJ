package com.example.bootReact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ReactController {

    @GetMapping("/{pageName}.do")
    public String page(@PathVariable String pageName, Model model) {
        model.addAttribute("pageName",pageName);
        System.out.println("뷰이름:" + pageName);
        return "view";
    }
}

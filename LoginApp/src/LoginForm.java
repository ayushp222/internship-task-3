import javax.swing.*;
import java.awt.event.*;

public class LoginForm extends JFrame {
    private JTextField usernameField;
    private JPasswordField passwordField;
    private JButton loginButton;

    public LoginForm() {
        setTitle("Login Page");
        setSize(400, 300);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(null);

        JLabel titleLabel = new JLabel("Login Page", SwingConstants.CENTER);
        titleLabel.setBounds(100, 20, 200, 30);
        titleLabel.setFont(new java.awt.Font("Arial", java.awt.Font.BOLD, 24));
        add(titleLabel);

        JLabel usernameLabel = new JLabel("Username:");
        usernameLabel.setBounds(50, 80, 100, 25);
        add(usernameLabel);

        usernameField = new JTextField();
        usernameField.setBounds(150, 80, 180, 25);
        add(usernameField);

        JLabel passwordLabel = new JLabel("Password:");
        passwordLabel.setBounds(50, 120, 100, 25);
        add(passwordLabel);

        passwordField = new JPasswordField();
        passwordField.setBounds(150, 120, 180, 25);
        add(passwordField);

        loginButton = new JButton("Login");
        loginButton.setBounds(150, 170, 100, 30);
        add(loginButton);

        loginButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String username = usernameField.getText();
                String password = new String(passwordField.getPassword());

                if (username.equals("admin") && password.equals("1234")) {
                    JOptionPane.showMessageDialog(null, "Login Successful");
                } else {
                    JOptionPane.showMessageDialog(null, "Invalid Credentials");
                }
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new LoginForm().setVisible(true);
        });
    }
}